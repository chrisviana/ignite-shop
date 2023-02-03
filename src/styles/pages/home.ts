import { styled } from '..';

export const HomeContainer = styled('main', {
  display: 'flex',
  width: '100%',
  maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
  marginLeft: 'auto',
  minHeight: 656,
})

export const Product = styled('a', {
 background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
 boxShadow: '0px 0px 48px rgba(0, 0, 0, 0.9)',
 borderRadius: 8,
 cursor: 'pointer',
 position: 'relative',
 display: 'flex',
 alignItems: 'center',
 justifyContent: 'center',
 overflow: 'hidden',

 img: {
  objectFit: 'cover',
 },

 footer: {
  position: 'absolute',
  bottom: '0.25rem',
  left: '0.25rem',
  right: '0.25rem',
  display: 'flex',
  alignItems: 'center',
  borderRadius: 6,
  justifyContent: 'space-between',
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  padding: '2rem',

  transform: 'translateY(110%)',
  opacity: 0,
  transition: 'all 0.2s ease-in-out',

  strong: {
    fontSize: '$lg'
  },
  
  span: {
    fontSize: '$xl',
    color: '$green300',
    fontWeight: 'bold',
  }
},

'&:hover': {
  footer:{
    transform: 'translateY(0%)',
    opacity: 1 
  }
}

})