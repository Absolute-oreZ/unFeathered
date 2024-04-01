import {
    useQuery,
    useMutation,
} from "@tanstack/react-query";

import {
    createUserAccount,
    signInAccount,
    getCurrentUser,
    signOutAccount,
    getUsers,
    getUserById,
    getRandomTip,
} from "@/lib/appwrite/api";
import { INewUser } from "@/types";
import { QUERY_KEYS } from "./queryKeys";

// ============================================================
// AUTH QUERIES
// ============================================================

export const useCreateUserAccount = () => {
    return useMutation({
        mutationFn: (user: INewUser) => createUserAccount(user),
    });
};

export const useSignInAccount = () => {
    return useMutation({
        mutationFn: (user: { email: string; password: string }) =>
            signInAccount(user),
    });
};

export const useSignOutAccount = () => {
    return useMutation({
        mutationFn: signOutAccount,
    });
};

// ============================================================
// USER QUERIES
// ============================================================

export const useGetCurrentUser = () => {
    return useQuery({
        queryKey: [QUERY_KEYS.GET_CURRENT_USER],
        queryFn: getCurrentUser,
    });
};

export const useGetUsers = (limit?: number) => {
    return useQuery({
        queryKey: [QUERY_KEYS.GET_USERS],
        queryFn: () => getUsers(limit),
    });
};

export const useGetUserById = (userId: string) => {
    return useQuery({
        queryKey: [QUERY_KEYS.GET_USER_BY_ID, userId],
        queryFn: () => getUserById(userId),
        enabled: !!userId,
    });
};

// ============================================================
// TIP QUERIES
// ============================================================

export function useRandomTip() {
    return useQuery({
        queryKey: [QUERY_KEYS.GET_RANDOM_TIP],
        queryFn: getRandomTip,
    });
}