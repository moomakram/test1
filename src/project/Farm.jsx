import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';

const Farm = () => {
  const navigate = useNavigate(); // استخدام useNavigate من react-router-dom

  const handleLogout = () => {
    // التوجيه إلى صفحة تسجيل الدخول عند الخروج
    navigate('/login');
  };

  const handleManageMovies = () => {
    // التوجيه إلى صفحة الأفلام
    navigate('/movies');
  };

  const handleManageTVShows = () => {
    // التوجيه إلى صفحة المسلسلات
    navigate('/TvShow');
  };

  return (
    <Container>
      <h2>Welcome to Your Entertainment Dashboard</h2>
      <p>Manage your favorite movies, TV shows, and explore new content!</p>
      
      <Button variant="success" onClick={handleManageMovies}>Manage Movies</Button>
      <Button variant="warning" onClick={handleManageTVShows}>Manage TV Shows</Button>
      <Button variant="danger" onClick={handleLogout}>Logout</Button>
    </Container>
  );
};

export default Farm;
