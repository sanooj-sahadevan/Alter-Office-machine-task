/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-wrapper-object-types */
import axios from "axios";
import { SERVER_URL } from "./serverURL";


export const addTask = async (taskName: string, text: string, date: string, status: string, category: string, userId: String, fileUrl: string) => {
    try {
        const response = await axios.post(`${SERVER_URL}/add-task`, { userId: userId, taskName: taskName, description: text, date: date, status: status, category: category, fileUrl: fileUrl }, {
            headers: {
                "Content-Type": "application/json",
            },
            withCredentials: true,
        });
        return response
    } catch (error) {
        console.log(error);
    }
};


export const fetchTasks = async (userId: string) => {
    try {
        const response = await axios.get(
            `${SERVER_URL}/fetch-task`,
            {
                params: { userId },
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true,
            }
        );

        return response.data
    } catch (error) {
        console.error("Error fetching tasks:", error);
    }
};




export const changeStatus = async (status: any, userId: any) => {
    try {
        const response = await axios.get(
            `${SERVER_URL}/change-status`,
            {
                params: { status, userId },
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true,
            }
        );

        return response.data
    } catch (error) {
        console.error("Error fetching tasks:", error);
    }
};



export const taskDelete = async (taskId: any) => {
    try {
        const response = await axios.post(`${SERVER_URL}/delete-task`, { taskId: taskId }, {
            headers: {
                "Content-Type": "application/json",
            },
            withCredentials: true,
        });
        return response
    } catch (error) {
        console.error("Error fetching tasks:", error);
    }
};


export const singleUsertask = async (taskId: any) => {
    try {
        const response = await axios.get(
            `${SERVER_URL}/singleUser-task`,
            {
                params: { taskId },
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true,
            }
        );

        return response.data
    } catch (error) {
        console.error("Error fetching tasks:", error);
    }
};

export const editTasks = async (taskName: any, text: string, date: string, status: string, category: string, storedUserId: string, editValue: any, editImage: string | null) => {
    try {
        const response = await axios.patch(`${SERVER_URL}/edit-task`, { userId: storedUserId, taskName: taskName, description: text, date: date, status: status, category: category, taskId: editValue, editImage: editImage }, {
            headers: {
                "Content-Type": "application/json",
            },
            withCredentials: true,
        });
        return response
    } catch (error) {
        console.error("Error fetching tasks:", error);
    }
};
export const deleteBatch = async (taskArray: string[]) => {
    try {
        const response = await axios.delete(
            `${SERVER_URL}/deleteBatch-task`,
            {
                data: { taskArray },
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true,
            }
        );
        return response;
    } catch (error) {
        console.error("Error deleting tasks:", error);
    }
};



export const statusChangeBatch = async (taskArray: string[], taskStatus: string) => {
    try {
        const response = await axios.put(`${SERVER_URL}/batchStatusChange-task`, { taskArray, taskStatus }, {
            headers: {
                "Content-Type": "application/json",
            },
            withCredentials: true,
        });
        return response
    } catch (error) {
        console.error("Error fetching tasks:", error);
    }
};