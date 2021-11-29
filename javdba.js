var modifiedHeaders = $request.headers;

modifiedHeaders['authorization'] = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJpZCI6OTgwNDk5LCJ1c2VybmFtZSI6Imlvc2hrajEifQ.aSlLcMcGxEtNrsxife9exe0BGs6C4bQHdiBUaYamEAM';

$done({headers : modifiedHeaders});
