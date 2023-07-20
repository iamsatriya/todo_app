import { getNote } from '../utils';

export async function taskLoader({ params }) {
  const task = await getNote(params.taskId);
  return { task };
}
