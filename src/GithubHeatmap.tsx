import GitHubCalendar from 'react-github-calendar';

function GitHubHeatmap() {
  const startDate = new Date('2024-07-30');

  const filterFromStartDate = (contributions:any) =>
    contributions.filter((day :any) => new Date(day.date) >= startDate);

  return (
    <div className='mt-0 mr-5 ml-5'>
      <GitHubCalendar 
       username="prashxant"
      transformData={filterFromStartDate} />
    </div>
  );
}

export default GitHubHeatmap; 
