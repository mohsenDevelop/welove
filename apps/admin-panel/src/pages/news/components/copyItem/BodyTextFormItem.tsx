import { useRef } from 'react';
import { useFormikContext } from 'formik';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import SunEditor from 'suneditor-react';
import SunEditorCore from 'suneditor/src/lib/core';

const BodyTextFormItem = () => {

    const { values, setFieldValue } = useFormikContext();
    console.log({ values });

    const editor = useRef<SunEditorCore>();

    return (
        <Stack
            flexDirection={'row'}
            alignItems={'center'}
            justifyContent={'space-between'}
            gap={'47px'}
        >
            <Stack
                gap={'6px'}
                flex={1}
            >
                <Typography
                    fontSize={16}
                    fontWeight={500}
                >
                    * Body Text
                </Typography>

                <Typography
                    fontSize={14}
                    fontWeight={400}
                >
                    Lorem ipsum dolor sit amet consectetur. Egestas felis neque malesuada nulla elit a.
                </Typography>

            </Stack>

            <Stack
                sx={{
                    flex: 1,
                    '& div.sun-editor': {
                        borderRadius: '17px',
                        '& div.se-container': {
                            overflow: 'hidden',
                            borderRadius: '17px',
                        }
                    }
                }}
            >
                <SunEditor
                    getSunEditorInstance={(sunEditor: SunEditorCore) => { editor.current = sunEditor; }}
                    onChange={(_val) => setFieldValue('body', _val)}
                    setOptions={{
                        buttonList: [
                            ['paragraphStyle', 'blockquote'],
                            ['align', 'list', 'lineHeight'],
                            ['outdent', 'indent'],
                            ['fullScreen', 'showBlocks'],
                            ['preview'],
                        ],
                        defaultTag: 'div',
                        minHeight: '150px',
                        height: '150px',
                        showPathLabel: false,
                        fontSize: [14],
                        fontSizeUnit: 'px',

                    }}
                />
            </Stack>
        </Stack>
    );
};

export default BodyTextFormItem;