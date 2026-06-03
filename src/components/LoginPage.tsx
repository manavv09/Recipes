import { UtensilsCrossed, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface LoginPageProps {
  signInWithGoogle: () => Promise<void>;
  onContinueAsGuest: () => void;
  isLoading: boolean;
}

export function LoginPage({
  signInWithGoogle,
  onContinueAsGuest,
  isLoading
}: LoginPageProps) {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-y-auto overflow-x-hidden bg-zinc-950 py-8 sm:py-12 px-4 font-sans text-zinc-50 select-none">
      {/* Background Decorative Gradients (Pulsing is disabled on mobile for performance/battery optimization) */}
      <div className="absolute top-[-10%] left-[-10%] h-[300px] w-[300px] sm:h-[600px] sm:w-[600px] rounded-full bg-primary/10 opacity-60 blur-[80px] sm:blur-[130px] sm:animate-pulse duration-[8000ms]" />
      <div className="absolute bottom-[-10%] right-[-10%] h-[300px] w-[300px] sm:h-[600px] sm:w-[600px] rounded-full bg-emerald-500/10 opacity-50 blur-[80px] sm:blur-[130px] sm:animate-pulse duration-[10000ms]" />

      {/* GitHub Repository Link - Shadcn style */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50">
        <a
          href="https://github.com/manavv09/Recipes"
          target="_blank"
          rel="noreferrer"
          className="flex size-8 sm:size-9 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900/40 text-zinc-400 backdrop-blur-sm transition-all hover:bg-zinc-800/80 hover:text-zinc-100"
          title="View GitHub Repository"
        >
          <svg
            viewBox="0 0 24 24"
            className="size-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
            <path d="M9 18c-4.51 2-5-2-7-2" />
          </svg>
        </a>
      </div>

      {/* Glassmorphic Login Card */}
      <div className="z-10 w-full max-w-[400px] p-2 sm:p-4">
        <div className="relative overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-6 sm:p-8 shadow-2xl backdrop-blur-md">
          {/* Top subtle highlight */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/45 to-transparent" />

          {/* Logo Section */}
          <div className="mb-6 sm:mb-8 flex flex-col items-center text-center">
            <div className="flex size-12 sm:size-14 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-[0_0_20px_rgba(var(--primary),0.3)] ring-1 ring-primary/25">
              <UtensilsCrossed className="size-6 sm:size-7" />
            </div>
            <h1 className="mt-3 sm:mt-4 text-xl sm:text-2xl font-bold tracking-tight text-zinc-100">RecipeForge</h1>
            <p className="text-muted-foreground mt-1 text-xs sm:text-sm">
              Precision Gym Diet & Meal Planner
            </p>
          </div>

          {/* Actions Section */}
          <div className="space-y-4">
            {isLoading ? (
              <div className="flex flex-col items-center justify-center py-6 text-zinc-400">
                <Loader2 className="size-8 animate-spin text-primary" />
                <span className="mt-3 text-xs">Setting up workspace...</span>
              </div>
            ) : (
              <>
                {/* Google Sign-in Button */}
                <Button
                  onClick={signInWithGoogle}
                  variant="outline"
                  className="relative flex h-11 w-full items-center justify-center gap-2.5 border-zinc-800 bg-zinc-900/60 text-sm font-medium text-zinc-200 hover:bg-zinc-800/80 hover:text-zinc-100 active:scale-[0.98] transition-all"
                >
                  <svg
                    className="size-4 text-zinc-200"
                    aria-hidden="true"
                    focusable="false"
                    viewBox="0 0 488 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="currentColor"
                      d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                    />
                  </svg>
                  Continue with Google
                </Button>

                {/* Separator */}
                <div className="relative flex py-2 items-center">
                  <div className="flex-grow border-t border-zinc-800/80" />
                  <span className="flex-shrink mx-4 text-[10px] uppercase tracking-wider text-zinc-500 font-semibold">
                    or
                  </span>
                  <div className="flex-grow border-t border-zinc-800/80" />
                </div>

                {/* Continue as Guest Button */}
                <Button
                  onClick={onContinueAsGuest}
                  variant="ghost"
                  className="h-11 w-full text-zinc-400 hover:bg-zinc-800/30 hover:text-zinc-200 active:scale-[0.98] transition-all text-xs"
                >
                  Continue as Guest
                </Button>
              </>
            )}
          </div>
        </div>

        {/* Footer info */}
        <p className="mt-8 text-center text-xs text-zinc-600">
          Sync recipes & biometrics seamlessly across your devices.
        </p>
      </div>
    </div>
  );
}
