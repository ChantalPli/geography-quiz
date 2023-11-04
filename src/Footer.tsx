import { Button } from '@mui/material'
import { useQuestionsStore } from './store/questions'
import { useQuestionsData } from './hooks/useQuestionsData'


export const Footer = () => {
 const {correct,incorrect,unanswered} = useQuestionsData()
 const reset = useQuestionsStore(state => state.reset)

  return (
    <footer style={{ marginTop: '16px' }}>
      <strong>{`✅ ${correct} Correct - ❌ ${incorrect} Incorrect - ❓ ${unanswered} Unanswered`}</strong>

      <div style={{marginTop: '16px'}}>
      <Button onClick={()=> reset()}>
        Reset
      </Button>
      </div>
    </footer>
  )
}