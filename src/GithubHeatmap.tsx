import GitHubCalendar from 'react-github-calendar';

function GitHubHeatmap() {
  const startDate = new Date('2024-07-25');

  const filterFromStartDate = (contributions:any) =>
    contributions.filter((day :any) => new Date(day.date) >= startDate);

  return (
    <div className='m-5  mt-0'>
      <GitHubCalendar 
       username="prashxant"
      transformData={filterFromStartDate} />
    </div>
  );
}

export default GitHubHeatmap;
