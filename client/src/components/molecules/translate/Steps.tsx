
interface StepsProps  {
  language: string;
}

export const Steps = (props: StepsProps) => {
  const {language} = props
  return (
    <div>
    {language === 'japanese' ? 
      <p>JAPANESE</p> : 
      <p>ENGLISH</p>
    }
    </div>
  )
};
