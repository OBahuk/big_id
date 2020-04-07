import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
    palette: {
        primary: {
            main:         '#00b9ad',
            contrastText: '#fff'
        },
        secondary: {
            main: '#f53931'
        },
        error: {
            main: '#b00020'
        }
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 620,
            md: 960,
            lg: 1280,
            xl: 1920
        }
    },
    typography: {
        useNextVariants: true,
        fontSize:        16
    },
    overrides: {
        MuiButton: {
            root: {
                height:  '40px',
                padding: '9px 20px 8px 24px',
                color:   '#00b9ad'
            },
            label: {
                'font-size':   '13px',
                'font-weight': 500
            }
        },
        MuiFormControl: {
            root: {
                width:           '100%',
                'margin-bottom': '20px'
            }
        },
        MuiInput: {
            underline: {
                '&:before': {
                    borderBottom: '1px solid rgba(100, 100, 100, 0.5)'
                }
            }
        },
        MuiInputBase: {
            root: {
                fontSize: '1em'
            },
            multiline: {
                backgroundColor: '#fafafa'
            }
        },
        MuiBox: {
            root: {
                '& h5': {
                    color:         'rgba(0, 0, 0, 0.87)',
                    border:        'none',
                    padding:       '0 4em 1em 0',
                    fontSize:      '1.5em',
                    lineHeight:    '1.75',
                    letterSpacing: '0.5px'
                },
            }
        },
        MuiListItem: {
            root: {
                '&$selected': {
                    color:           '#277e78',
                    backgroundColor: '#e1f1f1',

                    '&:hover': {
                        color:           '#176e68',
                        backgroundColor: '#d1e1e1'
                    }
                }
            }
        },

        MuiContainer: {
            root: {
                height: '800px',
                fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                maxWidth: 1366,
                '@media (max-width: 600px)': {
                    padding: 0
                },
                '& form': {
                    maxWidth: '300px',
                    margin: '0 auto',
                    textAlign: 'center',
                    padding: '1.5em'
                },
                '& a': {
                    color: '#ffffff',
                    textDecoration: 'none'
                },
                '& h1': {
                    color: '#00b9ad',
                    textAlign: 'center'
                },
                '& p': {
                    color: '#00b9ad',
                    textAlign: 'center',
                    height: '1.5em'
                }
            }
        },

        MuiDivider: {
            root: {
                margin: '1em',
                opacity: 0
            }
        },

        MuiSvgIcon: {
            root: {
                position: 'relative',
                top: '.2em',
                marginRight: '.5em',
                color: '#ffffff'
            }
        }
    }
});
