// Test frontend registration API call
const testFrontendRegistration = async () => {
    try {
        console.log('Testing frontend registration API call...');
        
        const testData = {
            name: 'Frontend Test User',
            email: 'frontend-test@example.com',
            password: 'password123'
        };
        
        console.log('Sending request to:', 'http://localhost:5000/api/auth/register');
        console.log('Request data:', testData);
        
        const response = await fetch('http://localhost:5000/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(testData)
        });
        
        console.log('Response status:', response.status);
        console.log('Response headers:', Object.fromEntries(response.headers.entries()));
        
        const responseData = await response.json();
        console.log('Response data:', responseData);
        
        if (response.ok) {
            console.log('✅ Registration successful!');
            console.log('Token received:', responseData.token ? 'Yes' : 'No');
            console.log('User data:', responseData.user);
        } else {
            console.log('❌ Registration failed');
            console.log('Error message:', responseData.message);
        }
        
    } catch (error) {
        console.error('❌ Network error:', error.message);
        console.error('Error details:', error);
    }
};

// Also test if backend is reachable
const testBackendHealth = async () => {
    try {
        console.log('\nTesting backend health...');
        const response = await fetch('http://localhost:5000/api/health');
        const data = await response.json();
        console.log('Health check response:', data);
        return response.ok;
    } catch (error) {
        console.error('Backend health check failed:', error.message);
        return false;
    }
};

// Run tests
(async () => {
    const isBackendHealthy = await testBackendHealth();
    if (isBackendHealthy) {
        await testFrontendRegistration();
    } else {
        console.log('Backend is not healthy, skipping registration test');
    }
})();