import http from 'k6/http';
import { sleep, check } from 'k6';

export let options = {
    vus: 10, // Virtual Users
    duration: '30s', // Test duration
    thresholds: {
        http_req_duration: ['p(95)<500'], // 95% of requests must complete below 500ms
    },
};

export default function () {
    let res = http.get('http://localhost:3000/todos');
    check(res, {
        'status is 200': (r) => r.status === 200,
        'response time < 500ms': (r) => r.timings.duration < 500,
    });
    sleep(1);
}
