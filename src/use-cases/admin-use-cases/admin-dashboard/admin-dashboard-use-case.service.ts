import { Injectable } from '@nestjs/common';
import { IDataServices } from 'src/core/abstracts';
import { IClsStore } from 'src/core/abstracts/adapters/cls-store.abstract';
import { AppClsStore } from 'src/common/interface/app-cls-store.interface';
import { ReviewProgressStatusEnum } from 'src/common/enums/review-progress-status.enum';

@Injectable()
export class adminDashboardUseCaseService {
  constructor(
    private readonly dataServices: IDataServices,
    private readonly cls: IClsStore<AppClsStore>,
  ) {}

  async generateOverallReviewInfo() {
    const totalReviews =
      await this.dataServices.review.getAllWithoutPagination();
    const totalCompletedReviews = totalReviews.filter(
      (review) => review.progressStatus === ReviewProgressStatusEnum.COMPLETED,
    );
    const totalSubmittedReviews = totalReviews.filter(
      (review) => review.progressStatus === ReviewProgressStatusEnum.SUBMITTED,
    );
    const totalPendingReviews = totalReviews.filter(
      (review) => review.progressStatus === ReviewProgressStatusEnum.PENDING,
    );

    return {
      totalReviews: totalReviews.length,
      totalCompletedReviews: totalCompletedReviews.length,
      totalSubmittedReviews: totalSubmittedReviews.length,
      totalPendingReviews: totalPendingReviews.length,
    };
  }

  async generateDepartmentReviewOverview() {
    const [allReviews, allTeams, allTeamMemberships] = await Promise.all([
      this.dataServices.review.getAllWithoutPagination(),
      this.dataServices.team.getAllWithoutPagination(),
      this.dataServices.teamMember.getAllWithoutPagination({}, { team: true }),
    ]);

    const response = allTeams.map((team) => {
      const currentTeamMembers = allTeamMemberships
        .filter((teamMember) => teamMember.team.id === team.id)
        .map((teamMember) => {
          return teamMember.member;
        });
      currentTeamMembers.push(team.leader);

      const currentTeamReviews = allReviews.filter((review) =>
        currentTeamMembers.some((member) => member.id === review.reviewee.id),
      );

      return {
        department: team.department,
        totalReviews: currentTeamReviews.length,
        completedReviews: currentTeamReviews.filter(
          (review) =>
            review.progressStatus === ReviewProgressStatusEnum.COMPLETED,
        ).length,
        submittedReviews: currentTeamReviews.filter(
          (review) =>
            review.progressStatus === ReviewProgressStatusEnum.SUBMITTED,
        ).length,
        pendingReviews: currentTeamReviews.filter(
          (review) =>
            review.progressStatus === ReviewProgressStatusEnum.PENDING,
        ).length,
      };
    });

    return response;
  }
}
