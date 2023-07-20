import { redirect } from 'react-router-dom';
import { getUserLogged } from '../utils';

export async function userLoader({ params }) {
  const user = await getUserLogged(params.taskId);
  console.log('userloader', user);
  if (!user || user.error) {
    return redirect('/auth');
  }
  return { user };
}
