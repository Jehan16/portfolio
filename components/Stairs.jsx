import { motion } from "framer-motion";

// variants
const stairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

// calculate the reverse index for staggered delay
const reverseIndex = (index) => {
  const totalSteps = 2; // number of steps

  return totalSteps - index - 1;
};

const Stairs = () => {
  return (
    <>
      {[...Array(2)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={stairAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.6,
              ease: "easeInOut",
              delay: reverseIndex(index) * 0.1,
            }}
            className="h-full w-full bg-white/20 relative"
          />
        );
      })}
    </>
  );
};

export default Stairs;
