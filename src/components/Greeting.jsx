import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGreetings } from '../redux/greetings/greetingSlice';

const Greetings = () => {
  const dispatch = useDispatch();
  const { greeting, error } = useSelector((state) => state.greetings);
  // rest of the component code

  useEffect(() => {
    dispatch(getGreetings());
  }, [dispatch]);

  if (error) {
    return <p>{error}</p>;
  }

  return <p className="message">{greeting.message}</p>;
};

export default Greetings;
