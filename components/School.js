export default function School({ name, location, tenure, field }) {
  return (
    <div className='mb-4'>
      <h3 className='font-bold'>
        {name}
        <p className='text-xs'>{location}</p>
      </h3>

      <p className='text-sm'>{field}</p>
    </div>
  );
}
