
import { PitchDeck } from "@/components/PitchDeck";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeToggle } from "@/components/ThemeToggle";

const Index = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground antialiased">
        <ThemeToggle />
        <PitchDeck />
      </div>
    </ThemeProvider>
  );
};

export default Index;
