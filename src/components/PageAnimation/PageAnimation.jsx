import { motion } from 'framer-motion'

const PageAnimation = ({children}) => {

    const animation = {
        initial: {
            x: 0,
            opacity: 0
          },
          animate: {
            x: 1,
            opacity: 1
          },
          exit: {
            x: 0,
            opacity: 0
          }
    }
  return (
    <>
      <motion.div
      variants={animation}
        initial= 'initial'
        animate='animate'
        exit= 'exit'
        transition={
          {
            duration: 0.2,
            delay: .5
          }
        }
      >
        {
            children
        }
      </motion.div>
    </>
  )
}

export default PageAnimation
