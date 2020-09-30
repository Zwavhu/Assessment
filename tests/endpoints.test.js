'use strict'
/* eslint-env jest */
/**
 * @jest-environment node
 * */

describe("Endpoints", () => {
    test('it gets to the endpoint', async done => {
        // Sends GET Request to /test endpoint
        const response = await request.get('/')
        const res_upload = await request.get('/upload')

        expect(response.status).toBe(200)
        expect(res_upload.status).toBe(200)
        // ...
        done()
    })
})