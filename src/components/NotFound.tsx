import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { useNavigate } from '@tanstack/react-router';
import { Button } from './ui';

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Stack justifyContent="center" alignItems="center" gap={3} height="100vh">
      <Typography variant="h3">
        Oops! We couldn't find the page you were looking for.
      </Typography>
      <Stack direction="row" gap={4}>
        <Button
          variant="outlined"
          color="secondary"
          size="large"
          sx={{ px: 3, py: 1 }}
          onClick={() => navigate({ to: '/' })}
        >
          <Typography variant="h6">Home</Typography>
        </Button>
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{ px: 3, py: 1 }}
          onClick={() => history.back()}
        >
          <Typography variant="h6">Go back</Typography>
        </Button>
      </Stack>
    </Stack>
  );
};
