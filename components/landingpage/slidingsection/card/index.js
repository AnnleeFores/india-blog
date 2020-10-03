/**@jsx jsx*/

import { Flex, jsx, Text, Box } from 'theme-ui'
import CardTemplate from '../../supplementary/cardtemplate/index'
import AuthorComp from '../../supplementary/authorcomp/index'

export default ({
  index,
  posterurl,
  title,
  author,
  para,
  labelimgurl,
  customAfterStyle,
}) => (
  <Box
    as='a'
    href='#'
    sx={{
      width: ['350px', '400px'],
      display: 'inline-block',
      ml: index == 0 ? null : [3],
      mr: [3],
      whiteSpace: 'normal',
      color: 'text',
      textDecoration: 'none',
    }}>
    <CardTemplate
      sx={{
        width: '100%',
        height: '300px',
        position: 'relative',
        bg: 'red',
        borderRadius: [10],
        backgroundImage: `url(${posterurl})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        filter: 'drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.25))',
        ':after': {
          width: ['5rem', '4.5rem'],
          height: ['7rem', '4.5rem'],
          bottom: ['-1.5rem'],
          right: ['0rem'],
          transform: 'rotate(15deg)',

          /**The above are some default styles*/

          ...customAfterStyle,

          backgroundImage: `url(${labelimgurl})`,
        },
        ':hover': {
          transform: 'scale(1.01)',
          transition: '0.1s',
        },
      }}></CardTemplate>
    <h1
      sx={{
        mb: [0],
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        ':hover': { textDecorationLine: 'underline' },
      }}>
      {title}
    </h1>
    <AuthorComp author={author} />
    <p sx={{ fontSize: [3] }}>{para}</p>
  </Box>
)
