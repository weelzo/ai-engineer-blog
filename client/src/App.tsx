import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Home from "@/pages/Home";
import Posts from "@/pages/Posts";
import PostView from "@/components/blog/PostView";
import Projects from "@/pages/Projects";
import About from "@/pages/About";
import NotFound from "@/pages/not-found";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

function Router() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          className="container mx-auto px-4 py-8"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageVariants}
          transition={{ duration: 0.3 }}
        >
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/posts" component={Posts} />
            <Route path="/posts/:slug" component={PostView} />
            <Route path="/projects" component={Projects} />
            <Route path="/about" component={About} />
            <Route component={NotFound} />
          </Switch>
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;