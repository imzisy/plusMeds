/*
 Licensed to the Apache Software Foundation (ASF) under one
 or more contributor license agreements.  See the NOTICE file
 distributed with this work for additional information
 regarding copyright ownership.  The ASF licenses this file
 to you under the Apache License, Version 2.0 (the
 "License"); you may not use this file except in compliance
 with the License.  You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing,
 software distributed under the License is distributed on an
 "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 KIND, either express or implied.  See the License for the
 specific language governing permissions and limitations
 under the License.
 */

//
//  AppDelegate.m
//  HelloCordova
//
//  Created by ___FULLUSERNAME___ on ___DATE___.
//  Copyright ___ORGANIZATIONNAME___ ___YEAR___. All rights reserved.
//

#import "AppDelegate.h"
#import "MainViewController.h"
#import "Validation.h"

#import <Fabric/Fabric.h>
#import <Crashlytics/Crashlytics.h>



@implementation AppDelegate

- (BOOL)application:(UIApplication*)application didFinishLaunchingWithOptions:(NSDictionary*)launchOptions
{

    if([Validation jailbroken]){
     
    }
    self.viewController = [[MainViewController alloc] init];
    [Fabric with:@[[Crashlytics class]]];

    return [super application:application didFinishLaunchingWithOptions:launchOptions];
    
}

- (void)applicationDidBecomeActive:(UIApplication *)application
{
    
    if (snapShot) {
        
        [snapShot removeFromSuperview];
        snapShot = nil;
    }
}
- (void)applicationWillResignActive:(UIApplication *)application
{
    snapShot = [[UIImageView alloc]initWithFrame:[UIScreen mainScreen].bounds];
    snapShot.backgroundColor = [UIColor whiteColor];
    snapShot.image = [UIImage imageNamed:@"Default-568h@2x~iphone.png"];
    
    [self.window addSubview:snapShot];
    
}

@end
