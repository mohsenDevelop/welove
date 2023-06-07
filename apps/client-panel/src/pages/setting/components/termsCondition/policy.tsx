import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import SunEditor from 'suneditor-react';
import SunEditorCore from 'suneditor/src/lib/core';

import {
    Paper,
    Button,
    colorPalette,
    BackButton,
    TextField
} from 'ui';

const policy = () => {

    const editor = useRef<SunEditorCore>();

    const navigate = useNavigate();

    const [values, setValues] = useState<{ title: string, description: string }>({ title: '', description: '' });

    return (
        <Stack>

            <BackButton
                onClick={(event: any) => navigate(-1)}
            />

            <Typography variant={'h1'} p={'12px 0px 24px 0px'}>Edit Terms and Conditions</Typography>

            <Paper
                sx={{ p: '30px 49px 30px 24px', maxWidth: 872 }}
            >
                <Stack
                    gap={'10px'}
                    mb={'24px'}
                >
                    <Typography fontSize={16} fontWeight={500}>Title</Typography>
                    <TextField
                        placeholder={'Enter your title'}
                        fullWidth={true}
                        onChange={(event) => setValues({ ...values, title: event.target.value })}
                        value={values.title}
                        inputProps={{
                            autoComplete: 'off',
                        }}
                    />
                </Stack>

                <Typography fontSize={16} fontWeight={500} pb={'10px'}>Description</Typography>

                <SunEditor
                    getSunEditorInstance={(sunEditor: SunEditorCore) => { editor.current = sunEditor; }}
                    onChange={(_val) => setValues({ ...values, description: _val })}
                    setOptions={{
                        buttonList: [
                            ['undo', 'redo'],
                            ['font', 'fontSize'],
                            ['paragraphStyle', 'blockquote'],

                            ['fontColor', 'hiliteColor'],
                            ['align', 'list', 'lineHeight'],
                            ['outdent', 'indent'],

                            ['table', 'horizontalRule', 'link'],
                            // ['math'] //You must add the 'katex' library at options to use the 'math' plugin.
                            // ['imageGallery'], // You must add the 'imageGalleryUrl'.
                            ['fullScreen', 'showBlocks'],
                            ['preview'],
                            ['removeFormat']

                            // ['save', 'template'],
                            // '/', Line break
                        ],
                        defaultTag: 'div',
                        minHeight: '350px',
                        height: '350px',
                        showPathLabel: false,
                        fontSize: [16],
                        fontSizeUnit: 'px',

                    }}
                />

                <Stack
                    pt={'24px'}
                    flexDirection={'row'}
                    justifyContent={'flex-end'}
                >
                    <Button
                        variant={'contained'}
                        backgroundColor={colorPalette.pink200}
                        LabelColor={colorPalette.white}
                        // disabled={!isValid}
                        sx={{ width: 171 }}
                    >
                        Save Changes
                    </Button>
                </Stack>

            </Paper>
        </Stack>
    );
};

export default policy;