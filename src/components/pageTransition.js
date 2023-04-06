import React from 'react';
import { useTransition, animated } from 'react-spring';

const PageTransition = ({ children, location }) => {
  const transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0, transform: 'translate3d(0,100%,0)' },
    enter: { opacity: 1, transform: 'translate3d(0,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(0,-100%,0)' },
  });

  return transitions.map(({ item, props, key }) => (
    <animated.div key={key} style={props}>
      {children}
    </animated.div>
  ));
};

export default PageTransition