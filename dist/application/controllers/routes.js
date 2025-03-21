"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const admin_controller_module_1 = require("./admin/admin-controller.module");
const auth_controller_module_1 = require("./auth/auth-controller.module");
const user_controller_module_1 = require("./user/user-controller.module");
const team_controller_module_1 = require("./team/team-controller.module");
const team_member_controller_module_1 = require("./team-member/team-member-controller.module");
const review_controller_module_1 = require("./review/review-controller.module");
const peer_nomination_controller_module_1 = require("./peer-nomination/peer-nomination-controller.module");
const review_summary_controller_module_1 = require("./review-summary/review-summary-controller.module");
const routes = [
    {
        path: '/hr-hub',
        children: [
            {
                path: '/admin',
                children: [admin_controller_module_1.AdminControllerModule],
            },
            {
                path: '/auth',
                children: [auth_controller_module_1.AuthControllerModule],
            },
            {
                path: '/user',
                children: [user_controller_module_1.UserControllerModule],
            },
            {
                path: '/team',
                children: [team_controller_module_1.TeamControllerModule],
            },
            {
                path: '/team-member',
                children: [team_member_controller_module_1.TeamMemberControllerModule],
            },
            {
                path: '/review',
                children: [review_controller_module_1.ReviewControllerModule],
            },
            {
                path: '/peer-nomination',
                children: [peer_nomination_controller_module_1.PeerNominationControllerModule],
            },
            {
                path: '/review-summary',
                children: [review_summary_controller_module_1.ReviewSummaryControllerModule],
            },
        ],
    },
];
exports.default = routes;
//# sourceMappingURL=routes.js.map