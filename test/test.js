let chai = require('chai')
let chaiHttp=require('chai-http')
let server=require('../app')
chai.should()
chai.use(chaiHttp)

describe('catalog API', ()=>{


    /*
    Test GET route
    */
    describe('GET / ', ()=>{
        it('should display welcome message when correct url is given', (done)=>{
            chai.request(server)
            .get('/valid')
            .end((err, response)=>{
                response.should.have.status(200)
                response.text.should.be.eq('hello world')
            done()
            })
        })
        it('should not display welcome message if incorrect url is given', (done)=>{
            chai.request(server)
            .get('/.')
            .end((err, response)=>{
                response.should.have.status(404)
            done()
            })
        })
    })
})