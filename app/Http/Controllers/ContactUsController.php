<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\MessageNotification;
use Inertia\Inertia;

class ContactUsController extends Controller
{
    public function index()
    {
        return Inertia::render('Contact/Index');
    }
    
    
    public function sendMessage(Request $request)
    {
        
        $validatedData = $request->validate([
            'name' => 'required',
            'email' => 'required|email',
            'message' => 'required',
        ]);

        $message = new \App\Models\Message();
        $message->name = $validatedData['name'];
        $message->email = $validatedData['email'];
        $message->message = $validatedData['message'];
        $message->save();        

        
        // dd($message->name);
        // Send email notification to admin
        Mail::to('mont@montwater.com')->send(new MessageNotification($message));

    
        return redirect()->back()->with('message', 'Message sent successfully!');
    }
}
