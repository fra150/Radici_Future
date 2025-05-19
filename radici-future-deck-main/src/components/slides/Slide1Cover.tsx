
import { RootIcon } from "../IconComponents";
import { motion } from "framer-motion";

export function Slide1Cover() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center max-w-3xl mx-auto">
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
          <RootIcon className="w-12 h-12" />
        </div>
      </motion.div>
      
      <motion.h1 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-4xl md:text-6xl font-bold mb-4"
      >
        RADICI FUTURE
      </motion.h1>
      
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <p className="text-xl md:text-2xl mb-6 max-w-2xl">
          Sistema di Rinascita Urbana con AI, Robotica Educativa e Supervisione Etica
        </p>
        <p className="text-sm md:text-base text-muted-foreground mb-8">
          Urban Renewal System with AI, Educational Robotics and Ethical Supervision
        </p>
      </motion.div>
      
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="flex flex-wrap justify-center gap-3 mb-10"
      >
        <span className="px-4 py-1 border rounded-full text-sm">AI</span>
        <span className="px-4 py-1 border rounded-full text-sm">Robotica</span>
        <span className="px-4 py-1 border rounded-full text-sm">Sostenibilità</span>
        <span className="px-4 py-1 border rounded-full text-sm">Inclusione</span>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        className="text-sm text-muted-foreground"
      >
        Hackathon GreenMindAI Catania 2025
      </motion.div>
    </div>
  );
}
