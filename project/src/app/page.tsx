import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center">
        <div className="flex items-center justify-center">
          <span className="text-2xl font-bold text-primary">StudySync</span>
        </div>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:text-primary transition-colors"
            href="/login"
          >
            Login
          </Link>
          <Link
            className="text-sm font-medium hover:text-primary transition-colors"
            href="/register"
          >
            Sign Up
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Study Smarter with{' '}
                  <span className="text-primary">AI-Powered</span> Collaboration
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Organize your study schedule, collaborate with peers, and receive personalized AI learning suggestions. 
                  Transform your learning journey with StudySync.
                </p>
              </div>
              <div className="space-x-4">
                <Link
                  className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  href="/register"
                >
                  Get Started Free
                </Link>
                <Link
                  className="inline-flex h-11 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  href="/login"
                >
                  Sign In
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid items-center gap-6 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Smart Study Planning</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    AI-generated study plans tailored to your subjects, schedule, and learning style.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Peer Collaboration</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Connect with classmates, follow their study progress, and stay motivated together.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Progress Tracking</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Monitor your study hours, track task completion, and visualize your learning journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 StudySync. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}
