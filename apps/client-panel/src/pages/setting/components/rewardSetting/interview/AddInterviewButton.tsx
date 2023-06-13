import { useNavigate } from 'react-router-dom';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

import {
    Button,
    colorPalette,
} from 'ui';
import { INTERVIEW_STAGE_ADMIN_URL } from '@config/urls';

const AddInterviewButton = () => {

    const navigate = useNavigate();

    return (
        <Button
            variant={'contained'}
            type={'submit'}
            backgroundColor={colorPalette.pink200}
            LabelColor={colorPalette.white}
            startIcon={<AddOutlinedIcon />}
            sx={{ width: 226, fontWeight: 600 }}
            onClick={() => navigate(INTERVIEW_STAGE_ADMIN_URL)}
        >
            Add Interview Stage
        </Button>
    );
};

export default AddInterviewButton;