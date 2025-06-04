import React, { useState } from 'react';
import { toast } from "@/components/ui/sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { AlertTriangle } from "lucide-react";
import { Link } from 'react-router-dom';
const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showDialog, setShowDialog] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, we would validate credentials with a backend
    // For this demo, always show the error dialog
    setShowDialog(true);
  };
  const handleRedirect = () => {
    // Redirect to Netflix official website
    window.location.href = "https://www.netflix.com";
  };
  return <div className="min-h-screen flex flex-col bg-cover bg-center" style={{
    backgroundImage: "url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=2000&q=80')"
  }}>
      <header className="w-full p-6">
        <div className="max-w-screen-xl mx-auto">
          <Link to="/" className="inline-block">
            <svg xmlns="http://www.w3.org/2000/svg" width="112" height="30" viewBox="0 0 1024 276.742" className="h-8 w-32" fill="#E50914">
              <path d="M140.803 258.904c-15.404 2.705-31.079 3.516-47.294 5.676l-49.458-144.856v151.073c-15.404 1.621-29.457 3.783-44.051 5.945v-276.742h41.08l56.212 157.021v-157.021h43.511v258.904zm85.131-157.558c16.757 0 42.431-.811 57.835-.811v43.24c-19.189 0-41.619 0-57.835.811v64.322c25.405-1.621 50.809-3.785 76.482-4.596v41.617l-119.724 9.461v-255.39h119.724v43.241h-76.482v58.105zm237.284-58.104h-44.862v198.908c-14.594 0-29.188 0-43.239.539v-199.447h-44.862v-43.242h132.965l-.002 43.242zm70.266 55.132h59.187v43.24h-59.187v98.104h-42.433v-239.718h120.808v43.241h-78.375v55.133zm148.641 103.507c24.594.539 49.456 2.434 73.51 3.783v42.701c-38.646-2.434-77.293-4.863-116.75-5.676v-242.689h43.24v201.881zm109.994 49.457c13.783.812 28.377 1.623 42.43 3.242v-254.58h-42.43v251.338zm231.881-251.338l-54.863 131.615 54.863 145.127c-16.217-2.162-32.432-5.135-48.648-7.838l-31.078-79.994-31.617 73.51c-15.678-2.705-30.812-3.516-46.484-5.678l55.672-126.75-50.269-129.992h46.482l28.377 72.699 30.27-72.699h47.295z" />
            </svg>
          </Link>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-md bg-black/80 rounded-md p-16">
          <h1 className="text-3xl font-bold text-white mb-8">
            {isLogin ? 'Sign In' : 'Sign Up'}
          </h1>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1">
              <Input id="email" type="email" placeholder="Email or phone number" value={email} onChange={e => setEmail(e.target.value)} required className="h-12 bg-gray-700/50 border border-gray-600 text-white placeholder:text-gray-400 text-base rounded-md" />
            </div>
            <div className="space-y-1">
              <Input id="password" type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required className="h-12 bg-gray-700/50 border border-gray-600 text-white placeholder:text-gray-400 text-base rounded-md" />
            </div>
            <Button type="submit" className="w-full h-12 bg-netflix-red hover:bg-netflix-red/90 text-white font-semibold text-base mt-6">
              {isLogin ? 'Sign In' : 'Sign Up'}
            </Button>
            
            <div className="flex items-center justify-between text-sm text-gray-400 mt-2">
              <label className="flex items-center">
                <input type="checkbox" className="mr-1 bg-gray-700 border-gray-600" />
                Remember me
              </label>
              <a href="#" className="hover:underline">Need help?</a>
            </div>
          </form>
          
          <div className="mt-16 text-gray-400">
            <div className="mb-4">
              {isLogin ? "New to Netflix? " : "Already have an account? "}
              <button onClick={() => setIsLogin(!isLogin)} className="text-white hover:underline">
                {isLogin ? 'Sign up now' : 'Sign in'}
              </button>
            </div>
            <p className="text-sm">
              This page is protected by Google reCAPTCHA to ensure you're not a bot. 
              <a href="#" className="text-blue-500 hover:underline ml-1">Learn more.</a>
            </p>
          </div>
        </div>
      </main>

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="bg-black/90 border-gray-800 text-white">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-netflix-red" />
              Authentication Error
            </DialogTitle>
            <DialogDescription className="text-netflix-lightgray">
              Invalid credentials. Please check your email and password and try again.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="destructive" className="bg-netflix-red hover:bg-netflix-red/90" onClick={handleRedirect}>Go Back</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>;
};
export default Login;