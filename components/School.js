export default function School({ name, location, tenure, field }) {
  return (
    <div className='mb-4 text-slate-700'>
      <h3 className='font-bold text-slate-700'>
        {name}
        <p className='text-slate-500 text-xs'>{location}</p>
      </h3>

      <p className='text-sm'>{field}</p>
    </div>
  );
}
