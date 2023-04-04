import { FC } from 'react';
import { SxProps } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

import { colorPalette } from '../colors';

export const BreadCrumb: FC<BreadCrumbProps> = ({ list, sx, onClick }) => {

  return (
    <Stack
      display={'flex'}
      flexDirection={'row'}
      alignItems={'center'}
      sx={sx}
    >
      {
        list?.length ? list.map((_item, _index: number) => (
          <Box
            key={_item.name}
            display={'flex'}
            alignItems={'center'}
            gap={'4px'}
            onClick={() => onClick!(_index)}
          >
            <Typography
              fontSize={13}
              fontWeight={400}
              color={_index + 1 === list.length ? colorPalette.gray900 : colorPalette.gray500}
              sx={{
                cursor: 'pointer'
              }}
            >
              {_item.name}

            </Typography>
            {
              _index + 1 !== list.length ?
                <Typography
                  fontSize={13}
                  component={'span'}
                  color={colorPalette.gray500}
                  pr={'4px'}
                >
                  /
                </Typography>
                :
                null
            }

          </Box>
        ))
          :
          null
      }
    </Stack>

  );
};

export interface BreadCrumbProps {
  sx?: SxProps;
  list: { link: string, name: string }[];
  onClick?: (index: number) => void;
}

BreadCrumb.defaultProps = {
  list: []
};

export default BreadCrumb;