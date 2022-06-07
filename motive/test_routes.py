def test_get_data(api):
    """Data page loads with title"""
    resp = api.get('/data')
    assert resp.status == '200 OK'
    assert b'The Motive' in resp.data


def test_post_data(api):
    """Does not allow POST requests to /data"""
    resp = api.post('/data')
    assert resp.status == '405 METHOD NOT ALLOWED'

