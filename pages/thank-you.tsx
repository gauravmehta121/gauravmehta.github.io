import Head from 'next/head';
import Link from 'next/link';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
      <Head>
        <title>Thank You | Gaurav Mehta</title>
        <meta name="description" content="Thank you for your message" />
      </Head>

      <div className="text-center max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
        <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100">
          <CheckCircleIcon className="h-10 w-10 text-green-600" />
        </div>
        <h2 className="mt-6 text-3xl font-bold text-gray-900">Thank You!</h2>
        <p className="mt-2 text-gray-600">
          Your message has been sent successfully. I'll get back to you as soon as possible.
        </p>
        <div className="mt-8">
          <Link 
            href="/" 
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
