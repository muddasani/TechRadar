export let config = {
    production: false,
    web: {
        uri: 'http://localhost:4200'
    },
    api: {
        uri: 'http://localhost:3000/api'
    },
    oauth: {
        jwtSecret: 'techradar_secret',
        jwtIssuer: 'techradar.developersworkspace.co.za',
        providers: {
            github: {
                clientId: '6e7d85d80257ee842525',
                clientSecret: '558b485c9662e71109b2d935288e7eed608617f9',
                redirectUri: 'http://techradar.developersworkspace.co.za/api/oauth/github/callback'
            }
        }
    },
    datastores: {
        mongo: {
            uri: 'mongodb://mongo:27017/techradar_dev'
        }
    },
    logging: {
        path: './'
    }
};