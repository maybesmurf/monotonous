declare type Params = {
    user: {
        email: string;
        displayName: string;
        username: string;
    };
    group: {
        id: number;
        book: {
            title: string;
        };
    };
};
export declare function newGroupInvite({ user }: Params): Promise<any>;
export {};
//# sourceMappingURL=new_group_invite.d.ts.map