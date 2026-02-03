<?php
namespace App\Http\Controllers;

use Illuminate\Routing\Controller as BaseController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use App\Mail\WelcomeMail;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

use App\Models\User;

use Exception;

class UserController extends BaseController
{
    //Inicio de sesión
    public function login(Request $request)
    {
        error_log('Login attempt for email: ' . $request->input('email'));
        $credentials = request(['email', 'password']);

        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();
            $user = Auth::user();

            // Verificar que el email esté verificado
            if ($user->email_verified_at === null) {
                Auth::logout();
                return response()->json([
                    'status' => 'ERROR',
                    'message' => 'Debes verificar tu correo electrónico antes de iniciar sesión.'
                ], 201);
            }

            return response()->json([
                'status' => 'OK',
                'server' => $_SERVER,
                'cookies' => $_COOKIE,
                'environment' => $_ENV
            ], 200);
        } 
        
        else {
            return response()->json([
                'status' => 'ERROR'
            ], 401);
        }
    }

    // Cierre de sesión
    public function logout(Request $request)
    {
        if (Auth::check()) {
            Auth::logout();
        }

        return response()->json([
            'status' => 'OK'
        ]);
    }

    //Obtener el objeto User como json
    public function user(Request $request)
    {
        $user = $request->user();

        if ($user instanceof User) {


            $userData = [
                'id' => $user->id,
                'name' => $user->name,
                'surname' => $user->surname,
                'email' => $user->email,
                'user_role_id' => $user->user_role_id,
                'user_photo' => $user->user_photo,
            ];

            $json = [
                'status' => 'OK',
                'user' => $userData
            ];
        } else {
            $json = [
                'status' => 'ERROR',
                'server' => $_SERVER,
                'cookies' => $_COOKIE,
                'environment' => $_ENV
            ];
        }

        return response()->json($json);
    }
    
    // Obtener todos los usuarios
    public function getAllUsers(Request $request)
    {
        try {
            $users = User::with('role')->get();   
            return response()->json([
                'status' => 'OK',
                'users' => $users
            ], 200);
        } catch (Exception $e) {
            Log::error('Error fetching users: ' . $e->getMessage());
            return response()->json([
                'status' => 'ERROR',
                'message' => 'Error fetching users'
            ], 500);    
        }
    }
}