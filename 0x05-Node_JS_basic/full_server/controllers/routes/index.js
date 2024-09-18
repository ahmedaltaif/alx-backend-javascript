import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

/**
 * Connects the routes
 * @param {Express} app - The Express application instance
 */
const mapRoutes = (app) => {
  app.get('/', AppController.getHomepage);
  app.get('/students', StudentsController.getAllStudents);
  app.get('/students/:major', StudentsController.getAllStudentsByMajor);
};

export default mapRoutes;
module.exports = mapRoutes;
