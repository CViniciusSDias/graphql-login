import { Box, Button, Text, CircularProgress } from '@chakra-ui/react';
import useAccountContext from 'common/context/account';
import { Navigate } from 'react-router-dom';

export default function Account() {
    const { firstName, lastName, handleLogout, loading, error } = useAccountContext();

    if (loading) return <Box textAlign="center"><CircularProgress isIndeterminate color="grey" size="sm" /></Box>;
    if (error) return <Navigate to="/" />;

    return (
        <>
            <Box textAlign="right">
                <Button textAlign="right" onClick={handleLogout}>Sair</Button>
            </Box>
            <Text fontSize="4xl" mb={1}>Account details</Text>
            <Text as="b">First name:</Text>&nbsp;
            <Text as="i">{firstName}</Text>
            <br />
            <Text as="b">Last name:</Text>&nbsp;
            <Text as="i">{lastName}</Text>
        </>
    );
}