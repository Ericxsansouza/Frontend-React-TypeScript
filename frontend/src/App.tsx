import { FiTrash } from 'react-icons/fi';

export default function App() {
  return (
    <div className="w-full min-h-screen bg-neutral-900 flex justify-center px-4">
      <main className="my-10 w-full md:max-w-2xl">
        <h1 className="text-3xl font-medium text-white">Customers</h1>

        <form className="flex flex-col my-6">
          <label className="font-normal text-sm text-neutral-700 py-3">Name</label>
          <input
            type="text"
            placeholder="Type your name"
            className="w-full mb-5 p-2 bg-neutral-900 rounded-full border-2 border-neutral-800 outline-none 
            text-white py-3 hover:border-sky-500 duration-200 ps-9"
          />

          <label className="font-normal text-sm text-neutral-700 py-2">E-mail</label>
          <input
            type="email"
            placeholder="Type your e-mail"
            className="w-full mb-5 p-2 bg-neutral-900 rounded-full border-2 border-neutral-800 outline-none 
            text-white py-3 hover:border-sky-500 duration-200 ps-9"
          />

          <input
            type="submit" 
            value="Register"
            className="cursor-pointer w-full p-2 bg-sky-500 py-3.5 rounded-full text-white font-medium my-6"
          />
        </form>

        <section className="flex flex-col">
          <article className="w-full bg-neutral-900 rounded-lg p-8 relative hover:scale-105 duration-200 border-2 border-solid
         border-neutral-800 shadow-2xl">
            <p className='text-white text-sm'><span className="font-medium text-white text-base cursor-default">Name:</span> Erick</p>
            <p className='text-white text-sm'><span className="font-medium text-white text-base cursor-default">E-mail:</span> eric@gmail.com</p>
            <p className='text-green-500 text-sm font-bold'><span className="font-medium text-white text-base cursor-default">Status:</span> ACTIVE</p>

            <button className='bg-red-500 w-7 h-7 flex justify-center items-center rounded-full absolute -right-3.5 -top-2'>
              <FiTrash size={18} color="#fff" />
            </button>
          </article>
        </section>
      </main>
    </div>
  )
}