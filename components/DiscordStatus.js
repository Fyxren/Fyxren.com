import { useLanyard } from "react-use-lanyard";

const DiscordStatus = () => {

    const { loading, status } = useLanyard({
        userId: '462914535351779328',
        socket: true
    });

    const getColor = () => {
        switch (status?.discord_status) {
            case 'online':
                return {
                    status: 'Online',
                    color: 'bg-green-500'
                };
            case 'idle':
                return {
                    status: 'Idle 💤',
                    color: 'bg-yellow-500'
                };
            case 'dnd':
                return {
                    status: 'DND',
                    color: 'bg-red-500'
                };
            default:
                return {
                    status: 'Offline',
                    color: 'bg-gray-500'
                };
        }
    };

    const getStatus = () => {
        if (loading) return 'Loading...';
        if (!status || status.discord_status == 'offline') return 'Offline';

        let filtered = status.activities?.filter((x) => x.type !== 4)?.pop();
        if (!filtered) return 'Online';

        switch (filtered.name) {
            case 'Spotify': return `🎵 Spotify - ${filtered.details || ''} by ${filtered.state}`;
            case 'Visual Studio Code':
                // return `💻 Coding - ${filtered.details.substring(4) || ''} in ${filtered.state || 'something I suppose'}`;
                return <span>💻 Coding - <span classname="italic">{filtered.details.substring(4) || ''}</span> in <span className="italic">{filtered.state || 'something I suppose'}</span></span>;
            default:
                if (filtered.name) return `Playing - ${filtered.name}`;
                return 'Online';
        }
    };

    return (
        <span className="flex items-center w-full space-x-2">
            <span title={getColor().status} className={["h-3 w-3 rounded-full flex-shrink-0", getColor().color].join(' ')} />
            <span className="text-sm truncate text-th-secondary" title={getStatus()}>
                {getStatus()}
            </span>
        </span>
    );
};

export default DiscordStatus;