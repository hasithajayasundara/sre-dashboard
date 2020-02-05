import React from "react";
import { Switch, Redirect } from "react-router-dom";

import { RouteWithLayout } from "./components";
import { Main as MainLayout, Minimal as MinimalLayout } from "./layouts";

import {
  Dashboard as DashboardView,
  ProductList as ProductListView,
  UserList as UserListView,
  Typography as TypographyView,
  Icons as IconsView,
  Account as AccountView,
  Settings as SettingsView,
  SignUp as SignUpView,
  SignIn as SignInView,
  NotFound as NotFoundView,
  SLO as SLOView,
  HealthDashboard as HealthDashboardView,
  Usage as UsageView,
  Support as SupportView,
  Quality as QualityView,
  MSR as MSRView,
  SLAViolations as SLAViolationsView
} from "./views";

const Routes = () => {
  return (
    <Switch>
      <Redirect exact from="/" to="/sign-in" />
      <RouteWithLayout
        component={DashboardView}
        exact
        layout={MainLayout}
        path="/dashboard"
      />
      <RouteWithLayout
        component={UserListView}
        exact
        layout={MainLayout}
        path="/users"
      />
      <RouteWithLayout
        component={SLOView}
        exact
        layout={MainLayout}
        path="/slo"
      />
      <RouteWithLayout
        component={ProductListView}
        exact
        layout={MainLayout}
        path="/products"
      />
      <RouteWithLayout
        component={TypographyView}
        exact
        layout={MainLayout}
        path="/typography"
      />
      <RouteWithLayout
        component={IconsView}
        exact
        layout={MainLayout}
        path="/icons"
      />
      <RouteWithLayout
        component={AccountView}
        exact
        layout={MainLayout}
        path="/account"
      />
      <RouteWithLayout
        component={SettingsView}
        exact
        layout={MainLayout}
        path="/settings"
      />
      <RouteWithLayout
        component={SignUpView}
        exact
        layout={MinimalLayout}
        path="/sign-up"
      />
      <RouteWithLayout
        component={SignInView}
        exact
        layout={MinimalLayout}
        path="/sign-in"
      />
      <RouteWithLayout
        component={NotFoundView}
        exact
        layout={MinimalLayout}
        path="/not-found"
      />
      <RouteWithLayout
        component={HealthDashboardView}
        exact
        layout={MainLayout}
        path="/health"
      />
      <RouteWithLayout
        component={UsageView}
        exact
        layout={MainLayout}
        path="/usage"
      />
      <RouteWithLayout
        component={SupportView}
        exact
        layout={MainLayout}
        path="/support"
      />
      <RouteWithLayout
        component={QualityView}
        exact
        layout={MainLayout}
        path="/quality"
      />
      <RouteWithLayout
        component={MSRView}
        exact
        layout={MainLayout}
        path="/msr"
      />
      <RouteWithLayout
        component={SLAViolationsView}
        exact
        layout={MainLayout}
        path="/sla"
      />
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;
