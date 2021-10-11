import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchStudents } from '../store/students';
import { fetchCampuses } from '../store/campuses';

export default () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStudents());
    dispatch(fetchCampuses());
  }, []);

  return <>hello world!</>;
};
