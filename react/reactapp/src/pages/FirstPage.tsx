import { Link } from 'react-router-dom';

export default function FirstPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold">First Page</h1>
      <Link to="/" className="text-white bg-blue-500 p-2 rounded inline-block mt-2">홈으로</Link>
    </div>
  );
}