import { useEffect, useState } from "react";
import Notification from "./Notification";

const reservedNotifications = [
    {
        id: 1,
        message: "안녕하세요, 오늘 일정을 알려드립니다.",
    },
    {
        id: 2,
        message: "점심식사 시간입니다.",
    },
    {
        id: 3,
        message: "이제 곧 미팅이 시작됩니다.",
    },
];

export default function NotificationList() {
    const [notifications, setNotifications] = useState([])

    useEffect(() => {
        const timer = setInterval(() => {
                setNotifications(preNotifications => {
                    if (preNotifications.length < reservedNotifications.length) {
                        const index = preNotifications.length
                        return [...preNotifications, reservedNotifications[index]]
                    } else {
                        clearInterval(timer)
                        return []
                    }
                })
            }, 1000);
        return () => {
                clearInterval(timer);
        }
    }, [])

    return (
        <>
            <div>
                {notifications.map((notification) => {
                    return (
                        <Notification
                            key={notification.id}
                            id={notification.id}
                            message={notification.message}
                        />
                    );
                })}
            </div>
        </>
    )
}