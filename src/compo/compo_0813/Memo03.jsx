import React, { useMemo, useState } from 'react';

const users = [
    { id: 1, name: "Kim", active: true },
    { id: 2, name: "Lee", active: false },
    { id: 3, name: "Park", active: true },
]

const Memo03 = () => {
    const [showActive, setShowActive] = useState(true)

    const filteredUsers = useMemo(() => {
        console.log("사용자 필터링 실행")
        return users.filter((user) => user.active === showActive)
    }, [showActive])

    return (
        <div>
            <button onClick={() => setShowActive((a) => !a)}>
                {showActive ? "비활성" : "활성" } 사용자를 보려면 클릭하세요.
                </button>
                <ul>
                    {filteredUsers.map(
                        (u) => (
                            <li key={u.id}>{u.name}</li>
                        )
                    ) 
                    }
                </ul>
        </div>
    );
};

export default Memo03;